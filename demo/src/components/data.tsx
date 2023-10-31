export const basicColumns: any = () => {
  return new Array(20).fill(0).map((_, i) => {
    if (i === 0)
      return {
        title: `ID`,
        dataIndex: `id`,
        key: `id`,
        width: 100,
        fixed: 'left',
        disableCustom: true
      }

    return {
      title: `title${i}`,
      dataIndex: `dataIndex${i}`,
      key: `key${i}`,
      width: 100
    }
  })
}

export const basicData: any = () => {
  return new Array(5).fill(0).map((_, i) => {
    return {
      id: i,
      dataIndex1: `dataIndex1-${i}`,
      dataIndex2: `dataIndex2-${i}`,
      dataIndex3: `dataIndex3-${i}`,
      dataIndex4: `dataIndex4-${i}`,
      dataIndex5: `dataIndex5-${i}`,
      dataIndex6: `dataIndex6-${i}`,
      dataIndex7: `dataIndex7-${i}`,
      dataIndex8: `dataIndex8-${i}`,
      dataIndex9: `dataIndex9-${i}`,
      dataIndex10: `dataIndex10-${i}`,
      dataIndex11: `dataIndex11-${i}`,
      dataIndex12: `dataIndex12-${i}`,
      dataIndex13: `dataIndex13-${i}`,
      dataIndex14: `dataIndex14-${i}`,
      dataIndex15: `dataIndex15-${i}`,
      dataIndex16: `dataIndex16-${i}`,
      dataIndex17: `dataIndex17-${i}`,
      dataIndex18: `dataIndex18-${i}`,
      dataIndex19: `dataIndex19-${i}`,
      dataIndex20: `dataIndex20-${i}`
    }
  })
}

export const groupColumns: any = () => {
  return [
    {
      title: `ID`,
      dataIndex: `id`,
      key: `id`,
      width: 100,
      fixed: 'left',
      disableCustom: true
    },
    ...new Array(5).fill(0).map((_, i) => {
      return {
        title: `title${i}`,
        children: [
          ...new Array(5).fill(0).map((_, j) => {
            return {
              title: `title${i}-${j}`,
              dataIndex: `dataIndex${i}-${j}`,
              key: `key${i}-${j}`,
              width: 100
            }
          })
        ]
      }
    })
  ]
}

export const groupData: any = () => {
  return new Array(5).fill(0).map((_, i) => {
    return {
      id: i,
      ...new Array(5).fill(0).reduce((sum, _, i) => {
        return {
          ...sum,
          ...new Array(5).fill(0).reduce((acc, _, j) => {
            return {
              ...acc,
              [`dataIndex${i}-${j}`]: `dataIndex${i}-${j}`
            }
          }, {})
        }
      }, {})
    }
  })
}
