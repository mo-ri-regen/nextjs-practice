import { useRouter } from "next/router";
import Link from "next/link"

export default function Post() {
  // const router = useRouter();
  // const { pid } = router.query;

  // return <p>Post: {pid}</p>;
  return(
    <div>
      <Link href="/jsonserver">
        <a>
          戻る
        </a>
      </Link>
      Hello
    </div>
  )
}