const appUrl =
  process.env.NEXT_PUBLIC_WEBAPP_URL || "https://clocksure.paysteroid.com";

const plansLink = appUrl + "/plans";
const registerLink = appUrl + "/onboarding/register";
const loginLink = appUrl + "/login";
const phoneNumber = "07044501078";
const email = "support@clocksurewise.com";
const address = "14a Karimu Kotun, Victoria Island";
const businessHours = "Monday - Friday, 8 AM - 5 PM GMT";

export {
  plansLink,
  registerLink,
  loginLink,
  phoneNumber,
  email,
  address,
  businessHours,
};
