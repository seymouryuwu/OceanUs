package oceanusproject.demov1.controller;

import org.apache.commons.io.IOUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

@Controller
@Validated
@RequestMapping("/image")
public class ImageController {
    @Autowired
    ResourceLoader resourceLoader;

    @GetMapping(value = "getsectionimage/{imageid}")
    public ResponseEntity<byte[]> getSectionImage(@PathVariable("imageid") String imageId) throws IOException {
        MediaType mediaType;
        if (imageId.substring(imageId.length() - 3).equals("jpg")) {
            mediaType = MediaType.IMAGE_JPEG;
        } else {
            mediaType = MediaType.IMAGE_PNG;
        }
        Resource resource = resourceLoader.getResource("classpath:static/images/" + imageId);
        InputStream input = resource.getInputStream();

        byte[] image = IOUtils.toByteArray(input);
        return ResponseEntity.ok().contentType(mediaType).body(image);
    }

    @GetMapping(value = "getbadgeimage/{imageid}")
    public ResponseEntity<byte[]> getBadgeImage(@PathVariable("imageid") String imageId) throws IOException {
        MediaType mediaType;
        if (imageId.substring(imageId.length() - 3).equals("jpg")) {
            mediaType = MediaType.IMAGE_JPEG;
        } else {
            mediaType = MediaType.IMAGE_PNG;
        }
        Resource resource = resourceLoader.getResource("classpath:static/images/badges/" + imageId);
        InputStream input = resource.getInputStream();

        byte[] image = IOUtils.toByteArray(input);
        return ResponseEntity.ok().contentType(mediaType).body(image);
    }
}
// http://localhost:8080/image/getimage/{imageid}