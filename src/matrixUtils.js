export const toEchelonForm = (matrix) => {
    let m = matrix.map(row => [...row]);
    const rows = m.length;
    const cols = m[0].length;
  
    let lead = 0;
    for (let r = 0; r < rows; r++) {
      if (cols <= lead) return m;
      let i = r;
      while (m[i][lead] === 0) {
        i++;
        if (rows === i) {
          i = r;
          lead++;
          if (cols === lead) return m;
        }
      }
  
      [m[i], m[r]] = [m[r], m[i]];
      const val = m[r][lead];
      for (let j = 0; j < cols; j++) {
        m[r][j] /= val;
      }
  
      for (let i = 0; i < rows; i++) {
        if (i === r) continue;
        const val = m[i][lead];
        for (let j = 0; j < cols; j++) {
          m[i][j] -= val * m[r][j];
        }
      }
      lead++;
    }
    return m;
  };
  
  export const toReducedEchelonForm = (matrix) => {
    let m = toEchelonForm(matrix);
    const rows = m.length;
    const cols = m[0].length;
  
    for (let i = rows - 1; i >= 0; i--) {
      let lead = -1;
      for (let j = 0; j < cols; j++) {
        if (m[i][j] !== 0) {
          lead = j;
          break;
        }
      }
  
      if (lead === -1) continue;
  
      for (let j = 0; j < i; j++) {
        const val = m[j][lead];
        for (let k = 0; k < cols; k++) {
          m[j][k] -= val * m[i][k];
        }
      }
    }
    return m;
  };
  