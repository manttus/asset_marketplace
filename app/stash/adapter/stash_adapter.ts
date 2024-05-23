function stashAdapter(proxyObject: any): any[] {
  const target = proxyObject;

  const resultArray = target.map((tar: any) => {
    return {
      id: tar[0],
      account: tar[1],
      image: tar[2],
      category: tar[3],
      type: tar[4],
      title: tar[5],
    };
  });

  return resultArray;
}

export default stashAdapter;
