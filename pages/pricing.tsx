import styled from "styled-components"

import Page from "components/Page"
import PricingTablesSection from "views/PricingPage/PricingTablesSection"

export default function PricingPage() {
	return (
		<Page title="Pricing" description="Cupidatat et reprehenderit ullamco aute ullamco anim tempor.">
			<Wrapper>
				<PricingTablesSection />
			</Wrapper>
		</Page>
	)
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`
