const Users = () => {
    let UsersData = [
        { id: 1, name: 'john', email: 'jjj@gmail.com' },
        { id: 2, name: 'Marry', email: 'mmm@gmail.com' },
        { id: 3, name: 'anne', email: 'aaa@gmail.com' }
    ];
    return (
        <>
            {UsersData.map((item) => {
                return (
                    <div key={item.id}>
                    <div>{item.name}</div>
                    <p>{item.email}</p>
                    </div>
                );
            })}
        </>
    );
};

export default Users;
