const nameChecker = name => {
    const validNames = ['Brutus', 'Remus']
    if (validNames.includes(name)) return name + ' is valid!'
    return 'Invalid name'
}

module.exports = nameChecker
