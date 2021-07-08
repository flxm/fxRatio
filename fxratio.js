const f = [1,2,3,4,5,6,7,9,10,15,16,20,25,30,40,50,100,1000]

function ratio(z) {
    let rest = 1-z
    if (rest == 0) return "1:0"
    if (rest == 1) return "0:0"
    if (rest == 0.5) return "1:1"

    let diff = 1000

    let aa = -1
    let bb = -1

    for (let a = 0; a<f.length; a++) {
        for (let b = 0; b<f.length; b++) {
            let r = Math.abs((f[a] / (f[a] + f[b])) - z)
            if (r<diff) {
                // console.log(f[a],f[b], z, r)
                aa = f[a]
                bb = f[b]
                diff = r
            }
        }
    }

    return `${aa}:${bb}`
}

function nice(a, b) {
    return ratio(a / (a+b))
}

module.exports = { ratio, nice }

// exports.fxratio = fxratio
// exports.nice = nice
