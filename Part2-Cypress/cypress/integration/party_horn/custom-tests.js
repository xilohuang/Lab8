describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then( ($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('number changes when volume slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then ( ($el) => {
      expect($el).to.have.value(33);
    })
  });

  it('third test', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('audio').then( ($el) => {
      expect($el).to.have.prop('volume',0.33);
    })
  });

  it('test image change and the sound sources with car horn', () => {
    cy.get('#radio-car-horn').check();
    cy.get('#sound-image').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/images/car.svg');
    })
    cy.get('#horn-sound').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/car-horn.mp3')
    })
  });

  it('test image change and the sound sources with party horn', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    })
    cy.get('#horn-sound').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3')
    })
  });

  it('test image change and the sound sources with air horn', () => {
    cy.get('#radio-air-horn').check();
    cy.get('#sound-image').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/images/air-horn.svg');
    })
    cy.get('#horn-sound').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/air-horn.mp3')
    })
  });

  it('volume image changes when increasing volumes 0 to 1', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then ( ($el) => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-0.svg");
    })
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then ( ($el) => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
    })
  })

  it('volume image changes when increasing volumes 1 to 34', () => {
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then ( ($el) => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
    })
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then ( ($el) => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
    })
  })

  it('volume image changes when increasing volumes 34 to 67', () => {
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then ( ($el) => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
    })
    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then ( ($el) => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-3.svg");
    })
  })

  it('honk button is disabled when the textbox input is a empty or a non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then ( ($el) => {
      expect($el).to.have.prop('disabled', true);
    })

    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn').then ( ($el) => {
      expect($el).to.have.prop('disabled', true);
    })
  })

  it('an error is shown when you type a number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number').clear().type('110');
    cy.get('#volume-number').invoke('prop', 'validationMessage').should('equal', 'Value must be less than or equal to 100.')
  })

});
