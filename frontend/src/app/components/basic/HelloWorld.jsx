import './common.css'

// const user = {
//     name: 'Hedy Lamarr',
//     imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//     imageSize: 90,
// };

export default function Profile({imageUrl, name}) {
    return (
        <>
            <h1>{name}</h1>
            <img
                className="avatar profile"
                src={imageUrl}
                alt={'Photo of ' + name}
            />
        </>
    );
}

export function HelloWorld()
{
    return (<div><h1>Hello World!</h1></div>)
}