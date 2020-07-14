const testNum = (num) => new Promise ((a,b,c,d) => {
    if (num > 50) {
        a('number is greater than 50')
    } else if (num < 50) {
        b('number is less than 50')
    } else if (num = 50) {
        c('number is 50')
    } else {
        d("Error")
    }
  })
