class HeaderComponent {
  openMenu() {
    cy.get("#react-burger-menu-btn").click();
  }

  clickLogout() {
    cy.get('[data-test="logout-sidebar-link"]').click();
  }
}

export default new HeaderComponent();