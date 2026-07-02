class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * Bikin tempat untuk menghitung angka dan jumlah munculnya
     * bikin pengulangan, jika angka belum pernah muncul inisiasi, jika sudah muncul sebelumnya tambahkan hitungan +1 pada angka yang sama di, sort desc, ambil slice 0,1
     */
    majorityElement(nums) {
        let numCount = new Map()

        for(const num of nums){
            if(numCount.has(num)){
                numCount.set(num, numCount.get(num) + 1)
            } else {
                numCount.set(num, 1)
            }
        }
        const [majorityNum] = [...numCount.entries()].sort((a, b) => b[1] - a[1])[0];
        return majorityNum;
    }
}
