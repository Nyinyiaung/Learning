export default function useRouter() {

    return function route(path) {
        console.log('route', path)
    }
}