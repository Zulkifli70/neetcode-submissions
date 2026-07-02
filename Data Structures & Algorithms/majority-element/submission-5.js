class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * Bikin tempat untuk menghitung angka dan jumlah munculnya
     * bikin pengulangan, jika angka belum pernah muncul inisiasi, jika sudah muncul sebelumnya tambahkan hitungan +1 pada angka yang sama di, sort desc, ambil slice 0,1
     */
    majorityElement(nums) {
        const freq = new Map();
        const len = nums.length

        for(let num of nums){
            freq[num] = (freq[num] || 0) + 1
            if(freq[num] > len / 2) return num
        }
    }
}
