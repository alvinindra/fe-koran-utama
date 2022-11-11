export default function useHelperFormat() {
  const formatNumber = (number) => {
    return number.toLocaleString('id')
  }

  return {
    formatNumber,
  }
}
