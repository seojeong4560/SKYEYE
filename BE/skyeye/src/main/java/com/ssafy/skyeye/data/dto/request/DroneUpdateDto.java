package com.ssafy.skyeye.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DroneUpdateDto {
    private String droneId;
    private String droneSerialNumber;
}
