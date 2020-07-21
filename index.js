const colors = require('./nipponcolors.json')

module.exports = {
    colors,
    getColorWithName: (name) => {
        return colors.find(color => color.name === name)
    },
    getColorWithRoma: (roma) => {
        return colors.find(color => color.roma === roma)
    },
    getRandonColor: () => {
        return colors[Math.floor(Math.random() * colors.length)]
    }
}