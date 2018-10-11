const os = require('os')
const path = require('path')
const fs = require('fs')
const rp = require('request-promise')

const rootFiles = 'https://dl.google.com/gactions/updates/bin'
const files = {
    'win32': {
        'amd64': rootFiles + '/windows/amd64/gactions.exe/gactions.exe'
    },
    'linux': {
        'x64': rootFiles + '/linux/amd64/gactions/gactions'
    }
};

(async function () {
    const platform = os.platform()
    const arch = os.arch()
    console.log('Dowloading gactions CLI')
    const res = await rp.get({
        url: files[platform][arch],
        encoding: null
    })
    const buffer = Buffer.from(res, 'utf8');
    console.log('gactions CLI downloaded')
    fs.writeFileSync(path.resolve(__dirname, '../bin/gaction'), buffer);
})()