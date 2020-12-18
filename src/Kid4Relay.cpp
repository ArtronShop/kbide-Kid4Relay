#include "Kid4Relay.h"

#define PCA9554_ADDR 0x39

Kid4Relay::Kid4Relay(TwoWire *wire) {
    _wire = wire;
}

void Kid4Relay::init() {
    // Config bit
    _wire->beginTransmission(PCA9554_ADDR);
    _wire->write(3); // Configuration register
    _wire->write(0x00); // All to OUTPUT
    _wire->endTransmission();
}

void Kid4Relay::set(int ch, bool value) {
	static uint8_t data = 0x00;
    if (value) {
        data |= 1 << (ch - 1);
    } else {
        data &= ~(1 << (ch - 1));
    }
    
    _wire->beginTransmission(PCA9554_ADDR);
    _wire->write(1); // Output Port register
    _wire->write(data);
    _wire->endTransmission();
}
