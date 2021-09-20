/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m , n) {
    const table = [];
    for (let i = 0; i < n; i++) table.push([...new Array(m).fill(1)]);
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            table[i][j] = table[i-1][j] + table[i][j-1];
        }
    }
    return table[n-1][m-1];
}
