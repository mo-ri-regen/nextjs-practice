import { useRouter } from "next/router";
import Link from "next/link";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;

  // return <p>Post: {pid}</p>;
  return (
    <div>
      <Link href="/jsonserver">
        <a>戻る</a>
      </Link>
    </div>
  );
}
// export async function getStaticPaths() {
//   return { pid };
// }
// export async function getStaticProps({ params }) {
//   const res = await fetch(`https://localhost/posts/${params.id}`);
// }
