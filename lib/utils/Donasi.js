const Donasi = (name) => new Promise((resolve, reject) => {
	resolve(`Halo kak ${name}, Jika berkenan untuk menyisihkan donasi seikhlas dan seridho-nyah.

[Donasi]: https://saweria.co/donate/akashiro

Terimakasih, berapapun nilainya asal dengan keikhlasan hati dapat menjadikan pahala.
    `)
})

module.exports = Donasi
