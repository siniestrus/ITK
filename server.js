var express = require('express');
var app = express();
var admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: 'otraprueba-66034',
        clientEmail: 'firebase-adminsdk-1vxab@otraprueba-66034.iam.gserviceaccount.com',
        privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC3Pmo2FqyaBl55\nMAh0jJG6Z/Cs1LPYCG6eypuBPBLEH2Qti+8EB/oJA3B89YRoDsfJwkThMiyR1lEO\nYoCf4afABxm8G/1r91fuEBs2aoPfJOYr1RkG8xNd6buzAbQBF13asj1iW1uVg4v2\nBbftCNK++cCQrhARqNSJqUY7gMn9XCQ3kZV3aQZCNXEeUmYRWiMxHKKmeDes/pf6\niH6bhOa3qoum6p2iAK11PlU3226fDn5v6G04n9GZShEMAPW7DVggZAAy0hjoOGfU\nm1s4URMLLgGnAyYPdUsAvBVKUP4ToBWd+JaLCsbKpwA02REMHKH8XhviwZi1JNtT\nEBMvJmszAgMBAAECggEAQ2xxxCkfpSTGyiyET+4RCNeJ1O4Gpmyj10WRZkHmXcd3\nItMkRQVyWLKtRy1HZMpbdL9IfNvrTlXfST2xOiLbiGqUa4SZAIroDa5bdPBISWjY\nUDR+mvIBpEKGT91GkEg6vmdq8q/OyPq4GvQLsunWMXLQCewh+X13hpeEQgynRdNp\n/qzyDcta8XfMz2zWwj3e9J27Xt//wYGeBSiin2qrSlxP3CbXZWg+nOdUF7tqzN8f\nLnUdpu7k3CjC34x91y9g2RiUKn+MT7z2xR8AzD91Nr3Y+eLQp/d5PeAngOfo62M8\niUC6Nlp4Q4iwpJI1xmWZqbdPXFh0W5J1nW0g/r+08QKBgQD+lg+ubjWWDrsAYXU8\nWrNLt0fNaWuaY4S/1uEBXNqR2G81h1EHYzoMpEXf/UQzwv+7NdmnTydDRAF7kTPK\nr3wCUSGQdIWLgmRKaziWYav/kXYs1I4rZpE/sXCG/MGf/OGcaCEFjTzvbdjAgKC6\nrpmxoW9LZhJkzdlSTOBH0dVFRwKBgQC4Qu2QjFbIVA/vcK99a/L9acW3MCWI3drs\nmWGi/t6I4XG14ILES7tEwuTe+gG59EN2B6t9JdQ9covApFwyVNP7zNLo/ZiZNeog\nqMnVC/pk1hFvdgjAXkdLDnqSOD+0gzKojbW6PBJaF0JYnhY2jXYHZlMKoA9Fsi8X\npNlfrLgQtQKBgQDkvOkb/PNyfouv/OB7uLZtaiA+Q+ClF5NXVfZV5hqPfZn1yz2X\nWKT4ZMRPStvzcdmZV/nV5D1Pp5N5dW3GR0MxRbnVc4vlW+NGJe3y15DVD9nQz61o\n+z+3rXKAJirF10zR3ZEFzu+X4+cilq9S67s1qOk5Il2Waok+88lzXemz0wKBgQCe\n2bwamJIcRDQ0tQ3lb5HdHDnCcrR5KOIahSSiM10/3jN8m5/AgJVicy6CeD/Swx0B\nfR0/V8SAcObAXjHJhk32Tx8ok6/hrZQ5MapGi/wCwHXphHWI+f42W7YZpnptMYoT\nu4+GjVE478JXyXnW799oA7PlfhWMfU+R76EilTFd3QKBgH+oVJ6856xkbAq8HNkG\nAzTNEzEkbj6icP95ufLk880LKBLiW1wKvus/IqeIn6fXLIVIdqjC68KuTBfxKEWb\n2OiIYjz5cEMfTd5y+OFsEeZpu84zVXpn4rRimw2feLj3xnj8GBDpOQwdYsUCcT7+\nDXGj4XJyosAZsZQzEfZbX/8Q\n-----END PRIVATE KEY-----\n'
    }),
    databaseURL: 'https://otraprueba-66034.firebaseio.com'
});

app.get('/listaUsuariosITK', function (req, res) {
    admin.database().ref("listaUsuariosITK").once("value", function (snapshot) {
        console.log('lista enviada');
        res.send(snapshot.val());
    });
});
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' URI no encontrada' })
});

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.OPENSHIFT_INTERNAL_PORT || process.env.PORT || 3000);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || 'localhost');

app.listen(app.get('port'), app.get('ip'), function () {
    console.log("Express server listening on " + app.get('ip') + ":" + app.get('port'));
});