function Admin()
{
    return (<div>
        Admin
    </div>);
}

function User()
{
    return (<div>
        User
    </div>);
}

export default function Dashboard({role})
{
    return <div>
        {role === 'admin'? <Admin /> : <User />}
    </div>
}