const capacityOfFleshInGigabite = +prompt(
  "Enter the capacity of your flesh drive in gigabites: "
);
const capacityInMegabite = capacityOfFleshInGigabite * 1024;
alert(
  `Your flash drive will hold ${
    (capacityInMegabite - (capacityInMegabite % 820)) / 820
  } files of 820 megabytes.`
);
