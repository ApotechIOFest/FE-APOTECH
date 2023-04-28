export interface Medicine {
    id: number,
    foto_obat: string, // url
    kategori: string,
    nama_obat: string,
    dosage_unit: string,
    price: string // ??????
    description: string
    stock: number
    expiration_date: string // YYYY-MM-DD
}
