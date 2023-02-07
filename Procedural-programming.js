//Function dot_product

function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }

  //Algorithm for determining orthogonal vectors using dot_product function:

  function orthogonal_vectors(vectors) {
    for (let i = 0; i < vectors.length; i++) {
      for (let j = i + 1; j < vectors.length; j++) {
        let v1 = vectors[i];
        let v2 = vectors[j];
        let ps = dot_product(v1, v2);
        if (ps === 0) {
          console.log(v1 + " and " + v2 + " are orthogonal");
        } else {
          console.log(v1 + " and " + v2 + " are not orthogonal");
        }
      }
    }
  }