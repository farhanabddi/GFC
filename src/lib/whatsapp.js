const GFC_WHATSAPP = "252639227514"

export function orderOnWhatsApp(itemName, itemDescription) {
  const message =
    "Hello GFC! I would like to order " + itemName + " - " + itemDescription;
  const url = "https://wa.me/252637780005" + "?text=" + encodeURIComponent(message)
  window.open(url, "_blank")
}