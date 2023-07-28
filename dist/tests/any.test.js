"use strict";
// JANGAN TERLALU SERING MENGGUNAKAN ANY
describe("Any", () => {
    it("should be support in typescript", () => {
        const mahasiswa = {
            nim: 287,
            nama: "Tio Dwi Satrio",
            jurusan: "Teknik Informatika"
        };
        console.info(mahasiswa);
        // Tidak akan error
        mahasiswa.jurusan = "Sistem Informasi";
        console.info(mahasiswa);
    });
});
