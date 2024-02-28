const Hello = () => {
    let title = 'My title'
    let arr =[
        {name: 'John'}, {name: 'anne'}, {name: 'dan'}
    ]
    return ( <>
        <h1>Hello {title}from hello</h1>
        <h1>{arr.map(item =>{
            return(<div>{item.name}</div>)
        })}</h1>
        </>
    )
};
export default Hello;
