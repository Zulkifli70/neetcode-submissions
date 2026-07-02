class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * Bikin tempat untuk menghitung angka dan jumlah munculnya
     * bikin pengulangan, jika angka belum pernah muncul inisiasi, jika sudah muncul sebelumnya tambahkan hitungan +1 pada angka yang sama di, sort desc, ambil slice 0,1
     */
    majorityElement(nums) {
        nums.sort()
        return nums [Math.floor(nums.length / 2)]
    }
}
