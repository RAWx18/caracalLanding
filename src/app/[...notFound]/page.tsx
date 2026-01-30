import { redirect } from 'next/navigation';

export default function CatchAllPage() {
  // Redirect to the canonical /404 path so the browser URL updates
  redirect('/404');
}
