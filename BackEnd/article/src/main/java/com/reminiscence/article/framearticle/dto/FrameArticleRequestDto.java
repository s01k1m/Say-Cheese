package com.reminiscence.article.framearticle.dto;

import com.reminiscence.article.domain.Frame;
import com.reminiscence.article.domain.FrameSpecification;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@NoArgsConstructor
public class FrameArticleRequestDto {
    @NotBlank(message = "프레임 이름을 입력해주세요")
    @Size(min=3, max=100, message="제목은 최소 3글자, 100글자 이하로 작성하세요")
    private String name;
    @Size(min=3, max=1000, message="링크 길이가 최대 1000글자입니다.")
    @NotBlank(message = "Link를 입력해주세요")
    private String link;
    @NotNull(message="허용 여부를 선택해주세요")
    private Boolean isPublic;

    @NotNull(message="규격을 선택해주세요")
    private FrameSpecification frameSpecification;

    @NotBlank(message = "제목을 입력해주세요")
    private String subject;

}
