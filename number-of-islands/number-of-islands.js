/**
 * @param {character[][]} grid
 * @return {number}
 */
//
var numIslands = function(grid) {
   let countIslands = 0;

   for(let rowIndex in grid){
       for(let colIndex in grid[rowIndex]){
           if(grid[rowIndex][colIndex]==='1'){
               teraform(parseInt(rowIndex),parseInt(colIndex),grid);
               countIslands++;
           }
       }
   } 
   return countIslands;
};

const teraform = (rowIn, colIn, grid) => {
    if(grid[rowIn] === undefined || grid[rowIn][colIn] === undefined|| grid[rowIn][colIn]==='0') return;
    
    grid[rowIn][colIn] = '0';
    teraform(rowIn+1,colIn,grid);
    teraform(rowIn-1,colIn,grid);
    teraform(rowIn,colIn+1,grid);
    teraform(rowIn,colIn-1,grid);

}
