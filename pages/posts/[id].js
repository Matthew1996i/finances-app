import Link from "next/link";
import { useRouter } from "next/router";

export default function posts() {
  const router = useRouter();

  return (
    <div>
      id da pagina {router.query.id}
      <img src="/images/avatar.jpeg" />
      <Link href="/">Ir para a home</Link>
    </div>
  );
}
