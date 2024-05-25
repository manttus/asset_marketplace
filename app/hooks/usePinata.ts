export default function usePinata() {
  async function pinImage(data: FormData) {
    try {
      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
          },
          body: data,
        }
      );
      const hash = await res.json();
      return hash;
    } catch (err) {
      console.log(err);
    }
  }

  return { pinImage };
}
