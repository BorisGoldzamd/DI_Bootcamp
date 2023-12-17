for(let i=0; i < 7; i ++){
    const asteriscos = '*'.repeat(i);
    console.log(asteriscos)
}

for (let i = 1; i < 8; i++) {
    let asteriscos = '';
    for (let j = 0; j < i; j++) {
        asteriscos += '*';
    }
    console.log(asteriscos);
}
