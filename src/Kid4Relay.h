#ifndef __KID4RELAY_H__
#define __KID4RELAY_H__

#include "Arduino.h"
#include "Wire.h"

class Kid4Relay {
    private:
        TwoWire *_wire;

    public:
        Kid4Relay(TwoWire *wire = &Wire) ;

        void init() ;
        void set(int ch = 1, bool value = false) ;

};

#endif