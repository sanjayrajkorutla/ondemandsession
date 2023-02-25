import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    updateTabId(tabId)
  }
  const activeTabChange = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabChange}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
