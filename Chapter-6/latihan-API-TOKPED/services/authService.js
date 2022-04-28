const shopsRepository = require("../repositories/shopsRepository");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
    JWT
} = require("../lib/const");
const SALT_ROUND = 10;

class authService {
    static async register({
        email,
        name,
        phone_number,
        password,
    }) {
        if (!email) {
            return {
                status: false,
                code_status: 400,
                message: "email wajib diisi",
                data: {
                    registered_shops: null,
                }
            }
        };

        if (!name) {
            return {
                status: false,
                code_status: 400,
                message: "name wajib diisi",
                data: {
                    registered_shops: null,
                },
            };
        }

        if (!phone_number) {
            return {
                status: false,
                code_status: 400,
                message: "nomor hp wajib diisi",
                data: {
                    registered_shops: null,
                },
            };
        }

        if (!password) {
            return {
                status: false,
                code_status: 400,
                message: "password wajib diisi",
                data: {
                    registered_shops: null,
                },
            };
        } else if (password.length < 5) {
            return {
                status: false,
                code_status: 400,
                message: "password minimal 5 karakter",
                data: {
                    registered_shops: null,
                },
            };
        }

        const getByEmail = await shopsRepository.getByEmail({
            email
        });

        if (getByEmail) {
            return {
                status: false,
                code_status: 400,
                message: "email sudah terdaftar",
                data: {
                    registered_shops: null,
                },
            };
        } else {
            const hashingPassword = await bycrypt.hash(password, SALT_ROUND);
            const registeredShops = await shopsRepository.register({
                email,
                name,
                phone_number,
                password: hashingPassword,
            });

            return {
                status: true,
                code_status: 201,
                message: "shops berhasil registrasi",
                data: {
                    registered_shops: registeredShops,
                },
            };
        }
    }

    static async login({
        email,
        password,
    }) {
        if (!email) {
            return {
                status: false,
                code_status: 400,
                message: "email wajib diisi",
                data: {
                    registered_shops: null,
                }
            }
        };

        if (!password) {
            return {
                status: false,
                code_status: 400,
                message: "password wajib diisi",
                data: {
                    registered_shops: null,
                },
            };
        } else if (password.length < 5) {
            return {
                status: false,
                code_status: 400,
                message: "password minimal 5 karakter",
                data: {
                    registered_shops: null,
                },
            };
        }

        const getShops = await shopsRepository.getByEmail({
            email
        });

        if (!getShops) {
            return {
                status: false,
                code_status: 400,
                message: "email belum terdaftar",
                data: {
                    registered_shops: null,
                },
            };
        } else {
            const passwordMatching = await bycrypt.compare(password, getShops.password);

            if (passwordMatching) {
                const token = jwt.sign({
                    id: getShops.id,
                    email: getShops.email,
                }, JWT.SECRET, {
                    expiresIn: JWT.EXPIRED,
                });

                return {
                    status: true,
                    code_status: 200,
                    message: "anda berhasil login",
                    data: {
                        token,
                    },
                };
            } else {
                return {
                    status: false,
                    code_status: 400,
                    message: "password anda salah, mohon isi ulang",
                    data: {
                        registered_shops: null,
                    },
                };
            }
        }
    }
}

module.exports = authService;