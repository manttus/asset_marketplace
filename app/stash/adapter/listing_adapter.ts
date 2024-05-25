function listingAdapter(proxyObject: any): any[] {
  const target = proxyObject;
  const resultArray = target.map((tar: any) => {
    return {
      id: tar[0],
      account: tar[1],
      image: tar[2],
      category: tar[5],
      title: tar[3],
      description: tar[4],
      isForSale: tar[6],
    };
  });

  return resultArray;
}

export default listingAdapter;
