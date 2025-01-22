function promises(){
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            new Promise ((resolve,reject)=>{
                if(age>18){
                    resolve(name);
                }else{
                    reject(name);
                }
            })
            .then((name)=> alert(`Welcome, ${name} You can vote.`))
            .catch((name)=> alert(`Oh sorry ${name} You aren't old enough.`));
        }