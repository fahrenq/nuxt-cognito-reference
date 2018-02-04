export default function({ store, redirect }) {
  if (store.getters.user && store.getters.user.tokens) return;
  redirect('/sign-in');
}
