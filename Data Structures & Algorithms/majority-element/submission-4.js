class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * Bikin tempat untuk menghitung angka dan jumlah munculnya
     * bikin pengulangan, jika angka belum pernah muncul inisiasi, jika sudah muncul sebelumnya tambahkan hitungan +1 pada angka yang sama di, sort desc, ambil slice 0,1
     */
    majorityElement(nums) {
        let res = 0,
            count = 0;

        for(let num of nums){
            if(count === 0){
                res = num
            }
            count += num === res ? 1 : -1
        }
        return res
    }
}
