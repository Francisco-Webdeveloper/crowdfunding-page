import styles from "./CampaignList.module.scss";
import { ProductCampaignList } from "../ProductCampaignList";

export const CampaignList = ({
  campaigns,
  noRewardPledge,
  noRewardPledgeDescription,
  formData,
  onChange,
  onSubmit,
  ...rest
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div
          className={
            formData.pledgeCard === "noReward"
              ? styles.campaignCardSelected
              : styles.campaignCard
          }
        >
          <div className={styles.inputAndLabel}>
            <input
              type="radio"
              id="noReward"
              name="pledgeCard"
              value="noReward"
              checked={formData.pledgeCard === "noReward"}
              onChange={onChange}
            />
            <label htmlFor="noReward" className={styles.noProduct}>
              {noRewardPledge}
            </label>
          </div>
          <p className={styles.description}>{noRewardPledgeDescription}</p>
        </div>
        <ProductCampaignList
          campaigns={campaigns}
          formData={formData}
          onChange={onChange}
          {...rest}
        />
      </form>
    </>
  );
};
