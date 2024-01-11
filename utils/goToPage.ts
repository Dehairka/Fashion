export default function goToPage(path: string) {
    const router = useRouter();
    router.push(path);
}