import { render, screen } from "@testing-library/react"
import Card from "./Card"

describe("<Card />", () => {
  it("should render with default props", () => {
    render(
      <Card
        link="link.html"
        title="Title Example"
        description="Description example"
      />
    )

    const linkCard = screen.getByRole("link")
    const headingCard = screen.getByRole("heading", { name: /Title Example/i })
    const descriptionCard = screen.getByText("Description example")

    expect(linkCard).toHaveAttribute("href", "link.html")
    expect(headingCard).toBeInTheDocument()
    expect(descriptionCard).toBeInTheDocument()
  })
})
