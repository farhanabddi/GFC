const GFC_WHATSAPP = "252639227514"

export function orderOnWhatsApp(itemName, itemDescription) {
  const message =
    "Hello GFC!";
  const url = "https://wa.me/252639227514" + "?text=" + encodeURIComponent(message)
  window.open(url, "_blank")
}