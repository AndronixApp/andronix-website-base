export default function ({route, redirect}) {

  let path = route.fullPath
  /*removing any extra "/"*/
  if (path.endsWith("/"))
    path = path.slice(0, path.length - 1)

  console.log("Redirecting the older link to the new version ✅")

  switch (path) {
    case "/commands":
      return redirect('/products/commands')
    case "/premium":
      return redirect('/products/premium')
    case "/premium-support":
      return redirect('/products/premium')
    case "/modded-os":
      return redirect('/products/modded-os')
    case "/refund-policy":
      return redirect('/legal/refund-policy')
    case "/privacy-policy":
      return redirect('/legal/privacy-policy')
    case "/terms-conditions":
      return redirect('/legal/terms-conditions')
    case "/restore-purchases/":
      return redirect('/')
    case "/modded-os-gallery":
      return redirect('/products/modded-os')
  }
}
