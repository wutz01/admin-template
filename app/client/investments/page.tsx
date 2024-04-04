import PageHeader from "@/components/common/page-header";
import InfoStat from "@/components/stats/info";

export default function Investments() {
  return(
    <div>
      <PageHeader title="Investments" buttonVisible={true} />
      <InfoStat />
    </div>
  )
}
